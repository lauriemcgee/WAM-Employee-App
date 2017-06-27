Rails.application.routes.draw do
 get '/employeesearch' => 'pages#index'
  
  namespace :api do
    get '/employeedata' => 'employees#index'
  end
end
