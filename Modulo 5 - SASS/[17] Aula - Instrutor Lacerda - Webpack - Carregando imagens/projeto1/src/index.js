import $ from 'jquery';
import './css/style.css';
import avatarDoctor from './images/doctor.png';


$(function() {

    $('#botao').on('click', function() {

        $('h1').html('Olá Mundo ALTERADO!');
        $(this).addClass('botao');

        $('#imagem').attr('src', avatarDoctor);

    });

});