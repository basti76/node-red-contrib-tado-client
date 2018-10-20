module.exports = function(RED) {
    "use strict";
    var Tado = require('node-tado-client');

    /**
     * Config node
     */
    function TadoConfigNode(n) {
        RED.nodes.createNode(this, n);

        this.name = n.name;
        this.username = n.username;
        this.password = n.password;
    }

    RED.nodes.registerType("tado-config", TadoConfigNode, {
        credentials: {
            username: {type: "text"},
            password: {type: "password"}
        }
    });

    /**
     * Tado node
     */
    function TadoNode(n) {
        RED.nodes.createNode(this, n);

        this.apiCall = n.apiCall;
        this.homeId = n.homeId;
        this.deviceId = n.deviceId;
        this.zoneId = n.zoneId;
        this.power = n.power;
        this.temperature = n.temperature;
        this.terminationType = n.terminationType;
        this.terminationTimeout = n.terminationTimeout;
        this.name = n.name;

        this.configName = n.configName;
        this.tadoConfig = RED.nodes.getNode(this.configName);

        if (this.tadoConfig) {
            var node = this;
            var tado = new Tado();

            tado.login(this.tadoConfig.credentials.username, this.tadoConfig.credentials.password)
                .then(token => {
                    node.status({ fill: "blue", shape: "dot", text: "connected" });

                    node.on("input", function(msg) {
                        var apiCall = msg.hasOwnProperty("apiCall") ? msg.apiCall : node.apiCall;
                        var homeId = msg.hasOwnProperty("homeId") ? msg.homeId : node.homeId;
                        var deviceId = msg.hasOwnProperty("deviceId") ? msg.deviceId : node.deviceId;
                        var zoneId = msg.hasOwnProperty("zoneId") ? msg.zoneId : node.zoneId;
                        var power = msg.hasOwnProperty("power") ? msg.power : node.power;
                        var temperature = msg.hasOwnProperty("temperature") ? msg.temperature : node.temperature;
                        var terminationType = msg.hasOwnProperty("terminationType") ? msg.terminationType : node.terminationType;
                        var terminationTimeout = msg.hasOwnProperty("terminationTimout") ? msg.terminationTimout : node.terminationTimeout;

                        var new_msg = {
                            'topic': apiCall,
                            'homeId': = msg.hasOwnProperty("homeId") ? msg.homeId : node.homeId,
                            'deviceId': msg.hasOwnProperty("deviceId") ? msg.deviceId : node.deviceId,
                            'zoneId': msg.hasOwnProperty("zoneId") ? msg.zoneId : node.zoneId,
                            'payload': ""
                        };

                        switch(apiCall) {
                            case "getMe":
                                tado.getMe().then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getHome":
                                tado.getHome(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getWeather":
                                tado.getWeather(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getDevices":
                                tado.getDevices(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getInstallations":
                                tado.getInstallations(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getUsers":
                                tado.getUsers(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getMobileDevices":
                                tado.getMobileDevices(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getMobileDevice":
                                tado.getMobileDevice(homeId, deviceId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getMobileDeviceSettings":
                                tado.getMobileDeviceSettings(homeId, deviceId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getZones":
                                tado.getZones(homeId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getZoneState":
                                tado.getZoneState(homeId, zoneId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getZoneCapabilities":
                                tado.getZoneCapabilities(homeId, zoneId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "getZoneOverlay":
                                tado.getZoneOverlay(homeId, zoneId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    if (err.response.status === 404) {
                                        node.status({ fill: "green", shape: "dot", text: apiCall });
                                        new_msg.payload = {};
                                        node.send(new_msg);
                                    } else {
                                        node.status({ fill: "red", shape: "ring", text: "errored" });
                                        node.error(err);
                                    }
                                });

                                break;
                            case "clearZoneOverlay":
                                tado.clearZoneOverlay(homeId, zoneId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "setZoneOverlay":
                                var termination = terminationType;
                                if (terminationType === 'timer') {
                                    termination = terminationTimeout;
                                }

                                tado.setZoneOverlay(homeId, zoneId, power, temperature, termination).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                            case "identifyDevice":
                                tado.identifyDevice(deviceId).then(function(resp) {
                                    node.status({ fill: "green", shape: "dot", text: apiCall });
                                    new_msg.payload = resp;
                                    node.send(new_msg);
                                }).catch(function(err) {
                                    node.status({ fill: "red", shape: "ring", text: "errored" });
                                    node.error(err);
                                });

                                break;
                        }
                    });
                })
                .catch(function(err) {
                    node.status({ fill: "red", shape: "ring", text: "errored" });
                    node.error(err);
                });
        } else {
            node.status({ fill: "grey", shape: "ring", text: "unconfigured" });
            this.error(RED._("tado.errors.missingconfig"));
        }
    }

    RED.nodes.registerType("tado", TadoNode);
}
