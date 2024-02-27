from fastapi import params
import pymysql

datos = {
        "host": "localhost",
        "user": "root",
        "passwd": "mysql2022",
        "port": 3306,
        "db": "ecobottles"
    }


class ConexionDB:
    @staticmethod
    def make_query(query: str, parametros = None):
        conn = pymysql.connect(**datos)
        result= []
        try:
            cursor = conn.cursor()
            cursor.execute(query, args=parametros)

            result = cursor.fetchall()
            print(cursor.description)
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            conn.close()
            return result



if __name__ == "__main__":

    d = ConexionDB.make_query("select * from users")
    print(d)
    for x in d:
        print(x)