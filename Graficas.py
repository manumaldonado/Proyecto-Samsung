import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("EncuestaPA_JV.csv", index_col="email")

tamaño_sector = {
    "Sector público": len(sector_publico),
    "Sector privado": len(sector_privado),
    "Independiente": len(sector_independiente)
}

#Gráfico de porcentaje de personas por sector de trabajo
'''plt.pie(list(tamaño_sector.values()), labels= list(tamaño_sector.keys()), colors = ["#FF3232", "#6666FF", "#329932"], autopct='%1.1f%%', startangle =90)
plt.title("Porcentaje de Personas por Sector")
plt.show()'''

#Gráfico del porcentaje de personas en cada rango salarial
#Cambiar df["salario"] por df_con_empleo["salario"] (Personas con empleo Hector)!!!!
'''conteo_salarios = df["salario "].value_counts().sort_index()
plt.pie(conteo_salarios, labels=conteo_salarios.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8", "#8FB1D0", "#7F9DB9", "#6F89A2", "#5F768B", "#4F6274"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de Personas por Rango Salarial (USD)")
plt.show()'''

#Gráfico del porcentaje de personas que gana en cada moneda
'''conteo_moneda = df[(df["  moneda "] != "Pesos y dolares") & (df["  moneda "] != "Bolivares y pesos colombianos/dolares")]
conteo_moneda = conteo_moneda["  moneda "].value_counts()
plt.pie(conteo_moneda, labels=conteo_moneda.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8", "#8FB1D0"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de personas que ganan en cada moneda establecida")
plt.show()'''

#Porcentaje de jovenes que trabajan y ahorran vs que trabajan y no ahorran | cuanto es el promedio de ahorro mensual
'''plt.subplot(1,2,1)
conteo_ahorro =df["bool_ahorro"].value_counts()
plt.pie(conteo_ahorro, labels=conteo_ahorro.index, colors=["#BBD6EE", "#8FB1D0"], autopct="%1.1f%%", startangle=90)
plt.title("Cantidad de Jovenes que Ahorran")

plt.subplot(1,2,2)
rango_ahorro = df[df["rango_ahorro"] != "$0"]
rango_ahorro = rango_ahorro["rango_ahorro"].value_counts()
plt.pie(rango_ahorro, labels=rango_ahorro.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8", "#8FB1D0"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentajes de los Rangos de ahorro")

plt.tight_layout()
plt.show()'''

#Cuantas Personas Gastan en Cada Necesidad
#Cambiar len(df["rango_alimentacion"]) y demás por len(nombre_del_dataframe_yafiltrado["rango_alimentacion"]) para que no tome los datos $0 que ya fueron limpiados por los demás
#Cambiar len(df["rango_gastos"]) por len(df["rango_vivienda"])
'''comparacion_necesidades = pd.DataFrame({
    "Necesidad" : ["Alimentación", "Transporte", "Vivienda"],
    "Cantidad": [len(df["rango_alimentacion"]), len(df["rango_transporte"]), len(df["rango_gastos"])]
})

comparacion_necesidades.plot(kind="bar", x="Necesidad", y="Cantidad", color = ["#FF3232", "#6666FF", "#329932"], legend=False)
plt.title("Cuantas Personas Gastan en cada Necesidad con sus Ingresos Propios")
plt.xlabel("Necesidad Básica")
plt.ylabel("Cantidad de Personas que Gastan en ella")
plt.show()'''

#Cuanto Gastan en cada Necesidad
#Cambiar df["rango_alimentacion"] y demás por los dataframes ya filtrados sin nan ni $0 de cada necesidad
#Cambiar "rango_gastos" por "rango_vivienda"
'''gasto_alimentacion = df["rango_alimentacion"].value_counts()
plt.pie(gasto_alimentacion, labels=gasto_alimentacion.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8", "#8FB1D0"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de Gastos en Alimentación")
plt.show()

gasto_transporte = df["rango_transporte"].value_counts()
plt.pie(gasto_transporte, labels=gasto_transporte.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de Gastos en Transporte")
plt.show()

gasto_vivienda = df["rango_gastos"].value_counts()
plt.pie(gasto_vivienda, labels=gasto_vivienda.index, colors=["#BBD6EE", "#B2D0EC", "#A8CAEA", "#9FC5E8", "#8FB1D0"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de Gastos en Vivienda")
plt.show()'''

#Cantidad de Jovenes Trabajadores que consideran tener educación financiera
'''educacion_financiera = df["educacion_financiera"].value_counts()
plt.pie(educacion_financiera, labels=educacion_financiera.index, colors=["#BBD6EE", "#A8CAEA"], autopct="%1.1f%%", startangle=90)
plt.title("Porcentaje de Jovenes que Aseguran Tener Educación Financiera")
plt.show()'''