import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", {
    textContent: "Exercício 03",
});


title.render();

title.tag = "h3";

title.build().render();


const form = new Form("body");

const label = new Label("Nome", form, {htmlFor: "nomeInput"});

const input = new Input(form, {id: "nomeInput", name: "nome"});

form.render();
label.render();
input.render();

form.addChildren(label, input);

form.addChildren(
    new Component("br"),
    new Component("br"),
    new Label("Sobrenome", form, {htmlFor: "sobrenomeInput"}),
    new Input(form, {id: "sobrenomeInput", name: "sobrenome"}),
    new Component("br"),
    new Component("br"), 
    new Input(form, {type: "submit", value: "Enviar"}),
)






