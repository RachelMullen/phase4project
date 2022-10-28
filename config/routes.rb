Rails.application.routes.draw do
  resources :woofs, only: [:create, :show, :update, :destroy]
  resources :comments, only: [:index, :create, :show, :update, :destroy]
  resources :users, only: [:index, :create, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #sesssions
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #users
  get "/profile/:id", to: "users#user_woofs"
  patch "/profile/settings", to: "users#update"
  delete "/profile/settings", to: "users#destroy"

  #woofs
  # get "/profile/:id", to: "woofs#show"
  get "/home", to: "woofs#index"
  post "/profile", to: "woofs#create"
  patch "/woof/:id/", to: "woofs#update"
  delete "/profile/:id", to: "woofs#destroy"

  #comments  
  # get "/comments", to: "comments#index"
  # post "/comments", to: "comments#create"
  # get "/comments/:id", to: "comments#show"
  # patch "/comments/:id", to "comments#update"
  # delete "/comments/:id", to: "comments#destroy"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
