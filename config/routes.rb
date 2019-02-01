Rails.application.routes.draw do
  resources :trainees
  resources :coaches
  devise_for :users
  root controller: :main, action: :index
    resources :session, only: [:index, :show, :new]
  get '*path', to: 'main#index', via: :all
end
