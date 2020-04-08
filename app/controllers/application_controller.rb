class ApplicationController < ActionController::Base
    helper_method :ensure_logged_in, :logged_in?, :logout!, :current_user
    #CELLL

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil
    end

end
