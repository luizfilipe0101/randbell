/*
    Funções responsáveis por
    receber o tempo mínimo e
    o tempo máximo desejado
    pelo usuário e estimar
    um valor médio aleatório
    para disparar o alerta 
    sonoro.
*/

function rand_timer(t_min, t_max)
{
    const seg_min = t_min * 60;
    const seg_max = t_max * 60;
    const rand = Math.random();

    return Math.floor(rand * (seg_max - seg_min + 1) + seg_min);
}
