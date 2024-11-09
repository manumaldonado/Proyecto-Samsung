import pandas as pd

def leer_csv_a_dataframe(ruta_csv):
    """
    Lee un archivo CSV y lo convierte a un DataFrame.

    Args:
        ruta_csv (str): La ruta del archivo CSV a cargar.

    Returns:
        DataFrame: El DataFrame con los datos del archivo CSV.
    """
    df = pd.read_csv(ruta_csv)
    return df

def dividir_datos_segun_empleo(df):
    """
    Divide el DataFrame en dos: personas con empleo y personas sin empleo.

    Args:
        df (DataFrame): El DataFrame con los datos a dividir.

    Returns:
        tuple: Dos DataFrames, uno con personas con empleo y otro con personas sin empleo.
    """
    con_empleo = df[df['ocupacion'].isin(['Estudiante y empleado.', 'Empleado o emprendedor.'])]
    sin_empleo = df[~df['ocupacion'].isin(['Estudiante y empleado.', 'Empleado o emprendedor.'])]

    return con_empleo, sin_empleo

ruta_csv = 'analisis_empleo/EncuestaPA_JV.csv'

df = leer_csv_a_dataframe(ruta_csv)

df_con_empleo, df_sin_empleo = dividir_datos_segun_empleo(df)

print(df_con_empleo)
print(df_sin_empleo)
