Rails.application.routes.draw do
  resources :woofs, only: [:index, :create, :show, :update, :destroy]
  resources :comments, only: [:index, :create, :show, :update, :destroy]
  resources :users, only: [:index, :create, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/profile/:id", to: "woofs#show"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
