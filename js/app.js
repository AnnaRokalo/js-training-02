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
        logWindow: function (elem) {
            switch(elem.charAt(0)) {
                case '.':
                    alert('first symbol ' + elem.charAt(0) + ' - in string "' + elem + '"');
                    break;
                case '#':
                    alert('first symbol ' + elem.charAt(0) + ' - in string "' + elem + '"');
                    break;
                case ' ':
                default:
                    alert('first symbol ' + elem.charAt(0) + ' - in string "' + elem + '"');
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
    logger.logWindow('p');
    logger.logWindow('.p');
    logger.logWindow('#p');
    logger.logWindow(' p');
})();