import pandas as pd

df = pd.read_csv("EncuestaPA_JV.csv", index_col="email")
limpieza = df[(df["rango_transporte"].notnull()) & (df["rango_transporte"] != "$0")]
rango_transporte = limpieza["rango_transporte"]
moda_transporte = rango_transporte.mode()
conteo_transporte = rango_transporte.value_counts()
conteo_porcentual_transporte = (conteo_transporte/conteo_transporte.sum())*100

