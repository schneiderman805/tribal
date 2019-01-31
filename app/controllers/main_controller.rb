class MainController < ApplicationController
  layout "main"

  def index
    if user_signed_in?
      user = current_user
    end
    sessions = Session.all
    @main_props = {available_sessions: sessions.available, booked_sessions: sessions.booked, full_sessions: sessions.full, user: user}
  end
end
