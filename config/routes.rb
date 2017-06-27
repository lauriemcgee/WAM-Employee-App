Rails.application.routes.draw do
  namespace :api do
    get '/' => 'employees#index'
  end
end
