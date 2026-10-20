    
    const pagina = document.querySelector('*')
    const d__mode = document.getElementById('checkon') 
        
    pagina.classList.add('tema__escuro')
        d__mode.addEventListener('input', darkmode)

            function darkmode(){
                if(pagina.classList.contains('tema__claro')){
                pagina.classList.replace('tema__claro','tema__escuro')
                lupa.style.color = 'rgb(150,150,150)';
            }
            else{
                pagina.classList.replace('tema__escuro', 'tema__claro')
                lupa.style.color = 'rgb(46, 46, 46)';
            }
        }
    const lupa = document.getElementById('caixa__pesquisa__lupa');
    const caixa__pesquisa = document.getElementById('caixa__pesquisa');     
            caixa__pesquisa__input.addEventListener('focus', fococaixapesquisa);
            caixa__pesquisa__input.addEventListener('blur', desfocarcaixapesquisa);

            function fococaixapesquisa(){
                if(pagina.classList.contains('tema__escuro')){
                lupa.style.color = 'white'
                caixa__pesquisa.style.boxShadow = '0px 0px 1px 2px white';
            }
            else{
                lupa.style.color = 'black'
                caixa__pesquisa.style.boxShadow = '0px 0px 1px 2px rgb(41, 41, 41)'
            }
            };

            function desfocarcaixapesquisa(){
                if(pagina.classList.contains('tema__escuro')){
                lupa.style.color = 'rgb(150,150,150)';
                caixa__pesquisa.style.boxShadow = '0px 0px 0px 0px'
            }
            else{
                lupa.style.color = 'rgb(46, 46, 46)';
                caixa__pesquisa.style.boxShadow = '0px 0px 0px 0px'
            }
            };
    const corpo__musica = document.getElementById('corpo__musicas')
    const menu__lateral = document.getElementById('menu')
    const abrir__menu__lateral = document.getElementById('abrir__menu__lateral')
            abrir__menu__lateral.addEventListener('change', function(){
                if(abrir__menu__lateral.checked){
                    abrir();
                } 
                else{
                    fechar();
                }

            });
            
            function abrir(){
                corpo__musica.style.width = '1130px'
                menu__lateral.style.width = '350px' 
            }

            function fechar(){
                corpo__musica.style.width = '1380px'
                menu__lateral.style.width = '100px'
            }

           

            
                
            
            
        