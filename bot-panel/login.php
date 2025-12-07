<?php
session_start();

// Credenciais do Painel do Bot (podes mudar depois)
$USER = "uchiha";
$PASS = "sharingan123";

// Se já estiver logado, redireciona
if (isset($_SESSION["bot_admin"]) && $_SESSION["bot_admin"] === true) {
    header("Location: /bot-panel/dashboard.php");
    exit;
}

// Processar login
$error = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $u = $_POST["username"] ?? "";
    $p = $_POST["password"] ?? "";

    if ($u === $USER && $p === $PASS) {
        $_SESSION["bot_admin"] = true;
        header("Location: /bot-panel/dashboard.php");
        exit;
    } else {
        $error = "Credenciais inválidas!";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Painel Uchiha - Login</title>
    <style>
        body {
            font-family: Arial;
            background: #111;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 360px;
            text-align: center;
            border: 1px solid #a00;
            box-shadow: 0 0 15px red;
        }

        input {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border-radius: 6px;
            border: none;
        }

        button {
            width: 100%;
            padding: 12px;
            background: red;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
        }

        .error {
            color: #ff4444;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>Painel do Bot | Uchiha</h2>

    <?php if ($error): ?>
        <div class="error"><?= $error ?></div>
    <?php endif; ?>

    <form method="POST">
        <input type="text" name="username" placeholder="Usuário" required>
        <input type="password" name="password" placeholder="Senha" required>
        <button type="submit">Entrar</button>
    </form>
</div>

</body>
</html>
