function LoggerLib() {
}

LoggerLib.prototype = {
    constructor: LoggerLib,

    TYPES: ['info', 'warning', 'error'],

    //get date and time in next format 'hh.mm dd/mm/yyyy'
    getDateTime: function() {
        var now, date, time, month;
        date = new Date();
        time = date.getHours() + ':' + date.getMinutes();
        month = date.getMonth() + 1;
        now =time + ' ' + date.getDate() + '/' + month + '/' + date.getFullYear();

        return now;
    },

    log: function (msg) {
        localStorage.clear();
        var dateStr = this.getDateTime();
        localStorage.setItem(dateStr, JSON.stringify(msg));
    },

    logConsole: function (msg, type) {
        var dateStr = this.getDateTime();
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