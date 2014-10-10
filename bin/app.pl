#!/usr/bin/env perl
use Dancer;
use App::LedgerSMB::Admin::Web;
use Dancer::Plugin::Lexicon;
set template => 'template_toolkit';
dance;
