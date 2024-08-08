import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import bodyParser from 'body-parser';

const dbConfig = {
  user: '*****',
  password: '*****',
  server: '*****',
  database: '*****',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

sql.connect(dbConfig, (err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

// Endpoint para registro de usuários
app.post('/api/users/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const pool = await sql.connect(dbConfig);
    await pool.request()
      .input('Nome', sql.NVarChar, nome)
      .input('Email', sql.NVarChar, email)
      .input('Senha', sql.NVarChar, senha)
      .query('INSERT INTO Usuarios_LP (Nome, Email, Senha) VALUES (@Nome, @Email, @Senha)');
    
    res.status(201).send('Usuário registrado com sucesso');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Endpoint para login
app.post('/api/users/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('Email', sql.NVarChar, email)
      .input('Senha', sql.NVarChar, senha)
      .query('SELECT * FROM Usuarios_LP WHERE Email = @Email AND Senha = @Senha');

    if (result.recordset.length > 0) {
      res.status(200).json(result.recordset[0]);
    } else {
      res.status(401).send('Email ou senha incorretos');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
