Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "assets#index"

  get "/sign_up", to: 'registration#new', as: 'sign_up'
  get "/sign_in", to: 'sessions#new', as: 'sign_in'
  post "/login", to: 'sessions#login', as: 'login'
  get "/additional_info", to: 'registration#additional_info', as: 'additional_info'

  post "/register", to: 'registration#create', as: 'registration'
  post "/approve_additional_info", to: 'registration#approve_additional_info', as: 'approve_additional_info'
  post "/confirm_email", to: 'registration#confirm_email', as: 'confirm_email'
end