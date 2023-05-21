import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

//EXERCICIO 2
app.get("/calculadora", (req: Request, res: Response) => {
  try {
    const { operacao, valorA, valorB } = req.query;

    if (!operacao || !valorA || !valorB) {
      return res.status(400).send({
        success: false,
        message: "Parametros invalidos",
      });
    }

    let resultado = 0;

    switch (operacao) {
      case "somar":
        resultado = Number(valorA) + Number(valorB);
        break;
      case "subtrair":
        resultado = Number(valorA) - Number(valorB);
        break;
      case "multiplicar":
        resultado = Number(valorA) * Number(valorB);
        break;
      case "dividir":
        resultado = Number(valorA) / Number(valorB);
        break;
      default:
        return res.status(400).send({
          success: false,
          message: "Operacao invalida",
        });
    }

    return res.status(200).send({
      success: true,
      message: resultado,
    });
    // res.json({resultado})
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.toString(),
    });
  }
});

//EXERCICIO 3
let count = 0;
app.get("/contador", (req: Request, res: Response) => {
  try {
    if (count !== 10) {
      count += 1;
      return res.status(200).send({
        success: true,
        message: `Contador: ${count}`,
      });
    }

    count = 0;
    return res.status(400).send({
      success: false,
      message: "Contador chegou a 10",
    });
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.toString(),
    });
  }
});

//EXERCICIO 4
app.get("/numeral", (req: Request, res: Response) => {
  try {
    const { operacao, numero } = req.query;

    let resultado = Number(numero);

    switch (operacao) {
      case "anterior":
        resultado -= 1;
        break;
      case "proximo":
        resultado += 1;
        break;
      default:
        return res.status(400).send({
          success: false,
          message: "Numero invalido",
        });
    }

    return res.status(200).send({
      success: true,
      message: resultado,
    });
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.toString(),
    });
  }
});

//EXERCICIO 5
app.get("/inverter-string", (req: Request, res: Response) => {
  try {
    const { valor } = req.query;

    if (!valor) {
      return res.status(400).send({
        success: false,
        message: "Valor not found",
      });
    }

    const valorInverterString = valor.toString().split("").reverse().join("");

    return res.status(200).send({
      success: true,
      message: valorInverterString,
    });
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.toString(),
    });
  }
});

//EXERCICIO 6
let array: string[] = [];
app.get("/remover-vogais", (req: Request, res: Response) => {
  try {
    const { valor } = req.query;

    if (!valor) {
      return res.status(400).send({
        success: false,
        message: "Valor not found",
      });
    }

    //expressao regular para remover as vogais
    let removerVogais = valor.toString().replace(/[aeiou]/gi, "");

    array.push(removerVogais);

    return res.status(200).send({
      success: true,
      message: array,
    });
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: error.toString(),
    });
  }
});

app.listen(3333, () => {
  console.log("Api is running port 3333...");
});
