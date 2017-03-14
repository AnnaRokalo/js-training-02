(function() {
    var logger = {
        TYPES: ['info', 'warning', 'error'],
        log: function (msg) {
            localStorage.clear();
            var date = new Date();
            var dateStr = date.toUTCString(); //date.getHours()+':'+date.getMinutes();
            localStorage.setItem(dateStr, JSON.stringify(msg));
        },
        logConsole: function (msg, type) {
            var date = new Date();
            var dateStr = date.toUTCString();
            var consoleLogStr = dateStr+ ": " + msg;

            switch(type) {
                case this.TYPES[0]:
                    console.info(consoleLogStr);
                    break;
                case this.TYPES[1]:
                    console.warn(consoleLogStr);
                    break;
                case this.TYPES[2]:
                    console.error(consoleLogStr);
                    break;
                default:
                    alert('Неверный тип');
            }

        },
        logAlert: function (msg, type) {
            switch(type) {
                case this.TYPES[0]:
                    alert(type + ': ' + msg);
                    break;
                case this.TYPES[1]:
                    alert(type + ': ' + msg);
                    break;
                case this.TYPES[2]:
                    alert(type + ': ' + msg);
                    break;
                default:
                    alert('Неверный тип');
            }
        },
        addCustomLog: function (name, method)
        {
            this[name] = method;
        },
        logAPI: function(url, msg) {

        },
        logWindow: function (elem, type, msg) {
            var container, elements;
            switch(elem.charAt(0)) {
                case '.':
                    elements = document.getElementsByClassName(elem.substring(1));
                    if(elements) {
                        container = elements[0];
                        container.innerHTML = msg;
                        container.style.fontSize = '14px';
                        switch(type) {
                            case this.TYPES[0]:
                                container.style.color = 'blue';
                                break;
                            case this.TYPES[1]:
                                container.style.color = 'orange';
                                break;
                            case this.TYPES[2]:
                                container.style.color = 'red';
                                break;
                            default:
                                container.style.color = 'black';
                                alert('Неверный тип');
                        }
                    }
                    break;
                case '#':
                    container = document.getElementById(elem.substring(1));
                    if(container) {
                        container.innerHTML = msg;
                        container.style.fontSize = '14px';
                        switch(type) {
                            case this.TYPES[0]:
                                container.style.color = 'blue';
                                break;
                            case this.TYPES[1]:
                                container.style.color = 'orange';
                                break;
                            case this.TYPES[2]:
                                container.style.color = 'red';
                                break;
                            default:
                                container.style.color = 'black';
                                alert('Неверный тип');
                        }
                    }
                    break;
                case ' ':
                default:
                    elements = document.getElementsByTagName(elem.trim());
                    if(elements) {
                        container = elements[0];
                        container.innerHTML = msg;
                        container.style.fontSize = '14px';
                        switch(type) {
                            case this.TYPES[0]:
                                container.style.color = 'blue';
                                break;
                            case this.TYPES[1]:
                                container.style.color = 'orange';
                                break;
                            case this.TYPES[2]:
                                container.style.color = 'red';
                                break;
                            default:
                                container.style.color = 'black';
                                alert('Неверный тип');
                        }
                    }
            }
            
        }
    };

    logger.log('Hi LS');
    logger.logConsole('Hi Console.', 'info');
    logger.logAlert('Hi Alert.', 'error');
    logger.addCustomLog('logAlertWithDate',function (msg) {
        var date = new Date();
        var dateStr = date.toUTCString();
        var alertLogStr = dateStr+ ": " + msg;
        alert(alertLogStr);
    });

    logger.logAlertWithDate('custom function');
    logger.logWindow('p', 'info', 'i am tag p');
    logger.logWindow('.p', 'error', 'i am tag with class p');
    logger.logWindow('#p', 'warning', 'i am tag with id p');
    // logger.logWindow(' p', 'info', 'i am tag p with space');
})();