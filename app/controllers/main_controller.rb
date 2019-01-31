class MainController < ApplicationController
  layout "main"

  def index
    if user_signed_in?
      user = current_user
    end
    sessions = Session.all
    @main_props = {availableSessions: sessions.available, bookedSessions: sessions.booked, fullSessions: sessions.full, user: user}
  end
end
