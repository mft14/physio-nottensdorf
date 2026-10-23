#!/usr/bin/env bash
set -euo pipefail

echo "In Keepass suche nach 'ftp_julia_physionottensdorf' <----- " ; 
echo "" ; 

zola build ;
lftp -u 'ftp366522-2782124' ftp://webhosting25.1blu.de/www -e '
    mirror -R --delete --verbose public/ /
    quit
'
