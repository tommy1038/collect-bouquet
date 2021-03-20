Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'top#index'
  resources :secret, only: [:index]
  namespace :api do
    resources :s3, only: [:index]
    resources :secret_s3, only: [:index]
  end
end
