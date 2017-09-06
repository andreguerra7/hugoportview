//scrollify
$(function() {
    $.scrollify({
        section: "section",
        scrollSpeed: 900,
        touchScroll: true,
    });
});

// Page scroll
$('a.page-scroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 40
            }, 900);
            return false;
        }
    }
});


//ToolTips
$('.toolTipC').tooltip({ title: "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft. Mira combinar o poder da computação de C++ com a usuabilidade do Visual Basic.", placement: "auto" });
$('.toolTipUnity').tooltip({ title: "Unity3D é uma poderosa gengine utilizada primariamente para criar games para diversas plataformas.", placement: "auto" });
$('.toolTipSQL').tooltip({ title: "SQLServer é um sistema gerenciador de Banco de dados relacional (SGBD) desenvolvido pela Microsoft.", placement: "auto" });
$('.toolTipWPF').tooltip({ title: "Windows Presentation Foundation, é um subsistema gráfico no .NET 3.0, WPF separa a interface do usuário da lógica de negócio, utilizando XAML. ", placement: "auto" });
$('.toolTipPHP').tooltip({ title: "PHP: Hypertext Preprocessor, é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML", placement: "auto" });
$('.toolTipOracle').tooltip({ title: "Oracle é um sistema gerenciador de Banco de dados relacional (SGBD) desenvolvido pela Oracle Corporation.", placement: "auto" });
$('.toolTipKinect').tooltip({ title: "Kinect é um sensor de movimentos desenvolvido exclusivamente para os consoles Xbox 360 e Xbox One, ambos da Microsoft.", placement: "auto" });
$('.toolTipCordova').tooltip({ title:"Cordova é uma plataforma de desenvolvimento móvel com APIs que permitem que o desenvolvedor acesse funções nativas do dispositivo.", placement: "auto" });
$('.toolTipSharepoint').tooltip({ title:"SharePoint é uma plataforma de aplicações Web da Microsoft, com utilização na criação de portais e intranets empresariais, gestão de conteúdos, gestão documental e criação de portais colaborativos, e publicação de aplicações web. ", placement: "auto" });
$('.toolTipAngular').tooltip({ title:"AngularJS é um framework JavaScript open-source, mantido pelo Google, que auxilia na execução de single-page applications.", placement: "auto" });
$('.toolTipJira').tooltip({ title:"Jira é um software comercial desenvolvido pela empresa Australiana Atlassian. É uma ferramenta que permite o monitoramento de tarefas e acompanhamento de projetos garantindo o gerenciamento de todas as suas atividades em único lugar.", placement: "auto" });