import { useState } from "react";

export default function Home() {
  const [fecha, setFecha] = useState("");
  const [valorUF, setValorUF] = useState(null);
  const [error, setError] = useState("");

  // --- Cerrar sesión ---
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // --- Consultar la API ---
  const buscarUF = async (e) => {
    e.preventDefault();
    setValorUF(null);
    setError("");

    if (!fecha) {
      setError("Por favor selecciona una fecha.");
      return;
    }

    const seleccionada = new Date(fecha);
    const hoy = new Date();

    if (seleccionada > hoy) {
      setError("No puedes consultar fechas futuras.");
      return;
    }

    // Convertir formato a DD-MM-YYYY
    const [year, month, day] = fecha.split("-");
    const fechaFormato = `${day}-${month}-${year}`;

    try {
      const res = await fetch(`https://mindicador.cl/api/uf/${fechaFormato}`);
      const data = await res.json();

      if (data?.serie?.length > 0) {
        setValorUF(data.serie[0].valor);
        console.log(data.serie[0].valor)
      } else {
        setError("No se encontró información para esa fecha.");
      }
    } catch (err) {
      setError("Error al consultar la API.");
    }
  };

  // Fecha máxima: hoy
  const maxFecha = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative">
      {/* Botón cerrar sesión */}
      <button
        onClick={logout}
        className="absolute top-4 right-4 text-sm text-gray-500 hover:text-red-600 transition"
      >
        Cerrar sesión
      </button>

      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Consulta valor UF
        </h1>

        <form onSubmit={buscarUF} className="flex flex-col gap-4">
          <label className="text-gray-700 text-sm">Selecciona una fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            max={maxFecha}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Buscar UF
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {valorUF && !error && (
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-lg">Valor UF:</p>
            <p className="text-2xl font-semibold text-blue-600">
              ${valorUF.toLocaleString("es-CL")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
