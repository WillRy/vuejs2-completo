# VueJS 2 - Conteúdo visto no curso da Origamid

Repositório para armazenar conteúdo visto no curso de Vue.JS 2 da Origamid.

## Conteúdo

O conteúdo está organizado em capítulos, sendo o 09 o projeto final, contendo
uma aplicação com vue-cli,vue-router e vuex.


## Projeto final

O projeto final é um mini marketplace onde usuários podem publicar seus produtos
e outros podem comprar.

### Executar o projeto


- Clone o repositório
- Entre na pasta 09-ranek-projeto-final
```shell
cd 09-ranek-projeto-final
```

- Dê permissão ao ambiente docker:
```shell
sudo chmod 777 -R ranek-api/docker
```

- Execute o ambiente
```shell
#entre na pasta da API
cd ranek-api

#execute o ambiente docker
docker-compose up -d

#entre na pasta da SPA
cd ../ranek-spa

#execute a SPA
npm run serve


```

- Acesse a URL: http://localhost:8081/

- Logue no sistema:
  - usuário: fulano@teste.com
  - senha: 123