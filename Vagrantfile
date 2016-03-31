# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|

    config.vm.define :mac do |mac|
      mac.vm.box = "AndrewDryga/vagrant-box-osx"
      mac.vm.synced_folder ".", "/Users/vagrant/wd", type: "rsync"
      mac.vm.network :private_network, ip: "10.1.1.10"
    end

    config.vm.define "fedora" do |fedora|
      fedora.vm.box = "fedora/23-cloud-base"

      fedora.vm.hostname = "fedora.vagrant.dev"
      fedora.vm.network "private_network", type: :dhcp
    end

end
