vagrant up fedora
vagrant ssh fedora -c "sh /vagrant/run-tests-not-mac.sh"
vagrant halt fedora
