# Pedidos Gourmet

Projeto exemplo para estudo de implementação de um sistema utilizando Rails 6.0.0 e Bootstrap 4, considerando as novas formas de importação de js e css em um projeto Rails.

### Conhecimentos Aprendidos

#### Estrutura do projeto

Estrutura da pasta *app/*

<pre>

app
├── assets
│   ├── config
│   │   └── manifest.js
│   ├── images
│   └── stylesheets
│       └── application.css
├── channels
│   └── application_cable
│       ├── channel.rb
│       └── connection.rb
├── controllers
│   ├── application_controller.rb
│   ├── concerns
│   └── pedidos_controller.rb
├── helpers
│   ├── application_helper.rb
│   └── pedidos_helper.rb
├── **javascript**
│   ├── channels
│   │   ├── consumer.js
│   │   └── index.js
│   └── **packs
│       ├── application.js
│       └── bootstrap_custom.js**
├── jobs
│   └── application_job.rb
├── mailers
│   └── application_mailer.rb
├── models
│   ├── application_record.rb
│   ├── concerns
│   └── pedido.rb
├── **stylesheets
│   ├── application.scss
│   └── bootstrap_custom.scss**
└── views
    ├── layouts
    │   ├── application.html.erb
    │   ├── mailer.html.erb
    │   └── mailer.text.erb
    └── pedidos
        ├── edit.html.erb
        ├── _form.html.erb
        ├── index.html.erb
        ├── index.json.jbuilder
        ├── new.html.erb
        ├── _pedido.json.jbuilder
        ├── show.html.erb
        └── show.json.jbuilder
        
</pre>

Estrutura da pasta *config/*

<pre>

config
├── application.rb
├── boot.rb
├── cable.yml
├── credentials.yml.enc
├── database.yml
├── environment.rb
├── environments
│   ├── development.rb
│   ├── production.rb
│   └── test.rb
├── initializers
│   ├── application_controller_renderer.rb
│   ├── assets.rb
│   ├── backtrace_silencers.rb
│   ├── content_security_policy.rb
│   ├── cookies_serializer.rb
│   ├── filter_parameter_logging.rb
│   ├── inflections.rb
│   ├── mime_types.rb
│   └── wrap_parameters.rb
├── locales
│   └── en.yml
├── master.key
├── puma.rb
├── routes.rb
├── spring.rb
├── storage.yml
├── **webpack
│   ├── development.js
│   ├── environment.js
│   ├── production.js
│   └── test.js
└── webpacker.yml**

</pre>

#### Gem foreman

Com a adição do webpack como gerenciador e compactar o js e css, para auxiliar no desenvolvimento.

<pre>

  *Gemfile*
  
  gem 'foreman'
  
</pre>

Utilização de um arquivo de configuração que nomei processos

<pre>

  *Procfile.dev*
  
  web: bundle exec puma -C config/puma.rb
  webpack: ./bin/webpack-dev-server
  
  *Comando para start dos servidores*
  
  $ foreman start -f Procfile.dev

</pre>

