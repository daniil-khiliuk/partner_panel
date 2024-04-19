class SessionsController < ApplicationController
    def new; end

    def login
        redirect_to dashboard_path
    end

    # def logout
    #     redirect_to sign_in_path
    # end
end