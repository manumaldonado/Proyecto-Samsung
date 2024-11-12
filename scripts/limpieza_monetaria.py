import pandas as pd

def limpiar_datos_monetarios(file_path, columnas, valores_a_eliminar=["$0", "$0."]):
    """
    Filtra filas de un archivo CSV eliminando aquellas que contienen valores 
    no deseados en las columnas monetarias indicadas.

    Args:
        file_path (str): Ruta del archivo CSV.
        columnas (list): Columnas con datos monetarios a filtrar.
        valores_a_eliminar (list, opcional): Valores a eliminar, por defecto ["$0", "$0."].

    Returns:
        pd.DataFrame: DataFrame con las filas filtradas.
    """
    data = pd.read_csv(file_path)
    data.columns = data.columns.str.strip()
    data[columnas] = data[columnas].astype(str)
    condition = ~data[columnas].isin(valores_a_eliminar).any(axis=1)
    filtered_data = data[condition]
    return filtered_data

columnas_a_filtrar = ["salario", "gastos", "rango_gastos"]
valores_a_eliminar = ["$0", "$0."]
datos_filtrados = limpiar_datos_monetarios('analisis_empleo/EncuestaPA_JV.csv', columnas_a_filtrar, valores_a_eliminar)

print(datos_filtrados.info())
print(datos_filtrados.head())
