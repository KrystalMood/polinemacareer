import { FormData } from "@/app/types/auth";

export const handleLoginSubmit = async (
  formData: FormData,
  setError: (error: string) => void,
  router: any
) => {
  try {
    const response = await fetch(
      "http://localhost/PolinemaCarrier/login.php",
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