Rails.application.routes.draw do
  root controller: :main, action: :index
  get '*path', to: 'main#index', via: :all
end
