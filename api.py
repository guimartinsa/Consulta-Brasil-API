from flask import Flask, render_template, request, jsonify
import requests
app = Flask(__name__)
# Função para consultar CEP
def consultar_cep(cep):
    url = f"https://brasilapi.com.br/api/cep/v1/{cep}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        return {"erro": f"Erro na consulta do CEP: {e}"}
    except Exception as e:
        return {"erro": f"Erro inesperado: {e}"}
# Função para consultar CNPJ
def consultar_cnpj(cnpj):
    url = f"https://brasilapi.com.br/api/cnpj/v1/{cnpj}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        return {"erro": f"Erro na consulta do CNPJ: {e}"}
    except Exception as e:
        return {"erro": f"Erro inesperado: {e}"}
    
# Função para consultar feriados
def consultar_feriado(ano):
    url = f"https://brasilapi.com.br/api/feriados/v1/{ano}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        return {"erro": f"Erro na consulta dos feriados: {e}"}
    except Exception as e:
        return {"erro": f"Erro inesperado: {e}"}
# Rota principal
@app.route("/")
def index():
    return render_template("index.html")
# Rota para consulta de CEP
@app.route("/consulta/cep", methods=["POST"])
def consulta_cep():
    cep = request.form.get("cep")
    resultado = consultar_cep(cep)
    return jsonify(resultado)
# Rota para consulta de CNPJ
@app.route("/consulta/cnpj", methods=["POST"])
def consulta_cnpj():
    cnpj = request.form.get("cnpj")
    resultado = consultar_cnpj(cnpj)
    return jsonify(resultado)
# Rota para consulta de feriados
@app.route("/consulta/feriados", methods=["POST"])
def consulta_feriados():
    ano = request.form.get("ano")
    resultado = consultar_feriado(ano)
    return jsonify(resultado)
if __name__ == "__main__":
    app.run(debug=True)