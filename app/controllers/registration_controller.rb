class RegistrationController < ApplicationController
    def new
        # raise
    end

    def create; end

    def approve_additional_info; end

    def additional_info
        render partial: 'additional_info'
    end

    def confirm_email; end
end