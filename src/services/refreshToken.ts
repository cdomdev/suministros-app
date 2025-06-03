export async function refreshApp() {
  try {
    const res = await fetch("/api/auth/refreshToken", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) throw new Error("No se pudo renovar el token");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return null;
  }
}
