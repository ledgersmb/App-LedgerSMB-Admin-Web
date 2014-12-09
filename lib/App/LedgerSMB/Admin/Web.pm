package App::LedgerSMB::Admin::Web;
use App::LedgerSMB::Admin::Web::Database;
use Dancer ':syntax';

our $VERSION = '0.1';

get '/' => sub { template 'index'; };
get '/logout' => sub { template 'logout'; };

true;
