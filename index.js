const puppeteer = require('puppeteer');

(async () => {
    const siteGit = 'https://github.com/';
    const btnLogin = 'body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > div.position-relative.mr-3.mb-4.mb-lg-0.d-inline-block'
    const inputEmail = '#login_field';
    const email = 'Insira seu email';
    const inputSenha = '#password';
    const senha = 'Insira sua Senha';
    const btnEntrar = '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button';
    const dropdown = 'body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex';
    const itemDropDown = 'body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(5)';
    const clicarRepositorio = '#js-pjax-container > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-default.width-full.border-bottom.color-border-muted > div > div > div.Layout-main > div > nav > a:nth-child(2)';
    const btnNew = '#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-main > div:nth-child(2) > div > div.border-bottom.color-border-muted.py-3 > div > div';
    const nameRepositorio = '#repository_name';
    const tituloRepositorio = 'Aprendendo Puppeteer.'
    const descricao = '#repository_description';
    const sobreDescricao = 'Esse projeto é um Exercício para treinar o puppeteer...'
    const privado = '#repository_visibility_private';
    const btnCreate = '#new_repository > div.js-with-permission-fields > button';


  
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 })
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');

    //abrindo pagina
    await page.goto(siteGit, { waitUntil: 'domcontentloaded' });
    await page.waitForNavigation();

    //btn login
    await page.waitForSelector(btnLogin);
    await page.click(btnLogin);
    await page.waitForTimeout(2000);

    //login
    await page.waitForSelector(inputEmail);
    await page.type(inputEmail, email);
    await page.waitForTimeout(2000);

    //senha
    await page.waitForSelector(inputSenha);
    await page.type(inputSenha, senha);
    await page.waitForTimeout(2000);
    
    //Entrar
    await page.waitForSelector(btnEntrar);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(4000);

    //dropdown
    await page.waitForSelector(dropdown);
    await page.click(dropdown);
    await page.waitForTimeout(4000);

    //item do dropdown
    await page.waitForSelector(itemDropDown);
    await page.click(itemDropDown);
    await page.waitForTimeout(3000)

    //criar um repositorio 
    await page.waitForSelector(clicarRepositorio);
    await page.click(clicarRepositorio);
    await page.waitForTimeout(3000);

    //criar novo repositorio
    await page.waitForSelector(btnNew);
    await page.click(btnNew);
    await page.waitForTimeout(3000);

    //nome do novo repositorio
    await page.waitForSelector(nameRepositorio);
    await page.type(nameRepositorio, tituloRepositorio);
    await page.waitForTimeout(3000);

    //descricao
    await page.waitForSelector(descricao);
    await page.type(descricao, sobreDescricao)


    //clicando no selec privado
    await page.waitForSelector(privado);
    await page.click(privado);
    await page.waitForTimeout(3000);

    //clicando em create repositorio
    await page.waitForSelector(btnCreate);
    await page.click(btnCreate);


//   await browser.close();
})();
