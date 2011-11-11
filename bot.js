/**
 * IRC Bot
 *
 * @author		Michael Owens
 * @website		http://www.michaelowens.nl
 * @copyright	Michael Owens 2011
 */
var sys = require( 'sys' ),
	irc = require( './irc' );

/**
 * Config
 */
var config = {
	//host:		'irc.freenode.com',
	host:		'irc.corp.yahoo.com',
	port:		6697,
	nick:		'chidobot',
	pass:       'SIMram30',
	username:	'chidobot',
	realname:	'Powered by Michael Owens',
	channels:	['#mexico'],
	command:	'.',
	debug:		true,
	
	plugins:	[ 'global', 'reload', 'gezien', 'textfilter', 'prue1' ]
};

/**
 * Let's power up
 */
var ircClient = new irc.Server( config );
ircClient.connect( );
