import { FormData, FormRegist } from "@/app/types/auth";

export const handleLoginSubmit = async (
  formData: FormData,
  setError: (error: string) => void,
  router: any
) => {
  try {
    const response = await fetch(
      "http://localhost/polinemakarir/api/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/main/dashboard");
    } else {
      setError(data.message);
    }
  } catch (error) {
    setError("An error occurred during login");
  }
}; 

export const handleRegisterSubmit = async (
  formRegist: FormRegist,
  setError: (error: string) => void,
  router:any
) => {
    const response = await fetch(
      "http://localhost/polinemakarir/api/register.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formRegist),
      }
    );

    const data = await response.json();
    if (data.success) {
      router.push("localhost:3000/auth/login"); //cara lempar ke login?
    } else {
      setError(data.message);
    }
  
}; 