class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)

      render "api/users/show"
    else
       render json: ["Invalid username/password combination"], status: 401
    end
  end

  def edit
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end

  end


end
