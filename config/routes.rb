Rails.application.routes.draw do
  devise_for :users
  root controller: :main, action: :index
    resources :session, only: [:index, :show, :new]
  get '*path', to: 'main#index', via: :all
end
