Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resource :session, only: [:create,:destroy]
      resources :breweries, only:[:show,:index, :create, :update] 
      resources :beers, only:[:index, :show, :create, :update]
      resources :checkins, only:[:index, :show, :create, :update, :destroy]
      resources :comments, only:[:update, :create, :destroy]
      resources :toasts, only: [:index, :create, :destroy]
  end
end
