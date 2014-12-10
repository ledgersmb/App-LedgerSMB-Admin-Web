package App::LedgerSMB::Admin::Web;
use App::LedgerSMB::Admin::Web::Database;
use App::LedgerSMB::Admin::Web::Auth;
use Dancer ':syntax';

our $VERSION = '0.1';

get '/' => sub { template 'index'; };
get '/logout' => sub { template 'logout'; };
get '/logout-js' => sub { App::LedgerSMB::Admin::Web::Auth::logout();
                       template 'logout'; };

true;
