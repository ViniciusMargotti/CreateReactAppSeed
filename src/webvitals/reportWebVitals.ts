/* 
reportWebVitals é um arquivo que vem por padrão no create-react-app, 
ele é responsável por reportar as métricas de performance da aplicação, 
como por exemplo o tempo de carregamento da página, o tempo de interação com o usuário, etc.
*/

const reportWebVitals = (onPerfEntry?: any) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
