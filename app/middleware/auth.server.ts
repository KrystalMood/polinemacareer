import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: ["s3cr3t"],
        secure: process.env.NODE_ENV === "production",
    }
})

export async function requireAuth(request: Request, requiredRole?: "employer" | "jobseeker") {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));

    const userId = session.get("userId");
    const userRole = session.get("role");

    if (!userId) {
        return redirect("/login");
    }

    try {
        if (requiredRole && userRole !== requiredRole) {
            return redirect("/unauthorized");
        }
        return { userId, userRole };
    } catch (error) {
        return redirect("/login");
    }
}

export async function createUserSession(userId: string, userRole: "employer" | "jobseeker") {
    const session = await sessionStorage.getSession();
    session.set("userId", userId);
    session.set("userRole", userRole);

    return redirect("dashboard", {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session),
        },
    });
}

export async function logout(request: Request) {
    const session = await sessionStorage.getSession(request.headers.get("Cookie"));
    return redirect("/login", {
        headers: {
            "Set-Cookie": await sessionStorage.destroySession(session),
        },
    });
}
