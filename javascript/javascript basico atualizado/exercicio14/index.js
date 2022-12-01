









let menu = prompt(`Bem vindo ao sistema de calculo de areas \n\n Digite 1 para calcular a area de um triangulo \n Digite 2 para calcular a area de um retangulo \n Digite 3 para calcular a area de um quadrado \n Digite 4 para calcular a area de um trapezio \n Digite 5 para calcular a area de um circulo \n Digite 0 para sair`);

while (menu != 0) {
    if(menu == 1) {
        function triangleArea(base, height) {
            return (base * height) / 2;
          }
       
        let base = prompt('Digite o valor da base:');
        let height = prompt('Digite o valor da altura:');
        
        alert(`A area do triangulo é: ${triangleArea(base, height)}`);

    } else if (menu == 2) {

        function rectangleArea(base, height) {
            return base * height;
          }
          
   let base = prompt('Digite o valor da base:');
        let height = prompt('Digite o valor da altura:');

        alert(`A area do retangulo é: ${rectangleArea(base, height)}`);
       
} else if (menu == 3) {

        function squareArea(side) {
        return side * side;
      }


        let side = prompt('Digite o valor do lado:');

        alert(`A area do quadrado é: ${squareArea(side)}`);
    
}

else if (menu == 4) {

    
function trapezoidArea(base, base2, height) {
    return ((base + base2) * height) / 2;
  }



        let base = prompt('Digite o valor da base:');

        let base2 = prompt('Digite o valor da base2:');

        let height = prompt('Digite o valor da altura:');

        alert(`A area do trapezio é: ${trapezoidArea(base, base2, height)}`);

}

else if (menu == 5) {

         function circleArea(radius) {
        return Math.PI * radius * radius;
    }
    

        let radius = prompt('Digite o valor do raio:');

        alert(`A area do circulo é: ${circleArea(radius)}`);



} else {

        alert('Opção inválida!');

    }

    menu = prompt(`Bem vindo ao sistema de calculo de areas \n\n Digite 1 para calcular a area de um triangulo \n Digite 2 para calcular a area de um retangulo \n Digite 3 para calcular a area de um quadrado \n Digite 4 para calcular a area de um trapezio \n Digite 5 para calcular a area de um circulo \n Digite 0 para sair`);

}