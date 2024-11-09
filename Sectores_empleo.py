import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("EncuestaPA_JV.csv", index_col="email")
limpieza = df[df["tipo_trabajo"].notnull()]
print(limpieza)

def separacion(limpieza):
    publico = limpieza[limpieza["tipo_trabajo"].str.contains("público")]
    privado = limpieza[limpieza["tipo_trabajo"].str.contains("privado")]
    independiente = limpieza[limpieza["tipo_trabajo"].str.contains("independiente")]

    publico["tipo_trabajo"] = "publico"
    privado["tipo_trabajo"] = "privado"
    independiente["tipo_trabajo"] = "independiente"

    return publico, privado, independiente

sector_publico, sector_privado, sector_independiente = separacion(limpieza)

moda_salario_publico = sector_publico["salario "].mode()
conteo_salario_publico = sector_publico["salario "].value_counts()
conteo_porcentual_salario_publico = (conteo_salario_publico/conteo_salario_publico.sum())*100

moda_salario_privado = sector_privado["salario "].mode()
conteo_salario_privado = sector_privado["salario "].value_counts()
conteo_porcentual_salario_privado = (conteo_salario_privado/conteo_salario_privado.sum())*100

moda_salario_independiente = sector_independiente["salario "].mode()
conteo_salario_independiente = sector_independiente["salario "].value_counts()
conteo_porcentual_salario_independiente = (conteo_salario_independiente/conteo_salario_independiente.sum())*100

comparacion = pd.DataFrame({
    "Sector público": conteo_salario_publico,
    "Sector privado": conteo_salario_privado,
    "Independiente": conteo_salario_independiente
})

'''comparacion.plot(kind="bar", color = ["red", "blue", "green"])
plt.title("Comparación de Rangos de Ganancia por Sector")
plt.xlabel("Rango de Salario")
plt.ylabel("Cantidad de Personas con dicho Salario")
plt.show()'''