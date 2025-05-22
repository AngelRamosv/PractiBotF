import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  formularios: Dexie.Table<IFormulario, number>;

  constructor() {
    super('PractiBotDB');
    
    this.version(1).stores({
      formularios: '++id, usuario, contrasena, matricula, conocimientosProgramacion'
    });
    
    this.formularios = this.table('formularios');

    this.on('ready', () => {
      console.log('%cBase de datos iniciada correctamente', 'color: #4CAF50; font-weight: bold');
      this.mostrarComandosConsola();
    });

    this.exponerMetodosDepuracion();
  }

  // ================= MÉTODOS PRINCIPALES =================
  async validarCredenciales(usuario: string, contrasena: string): Promise<boolean> {
    const user = await this.formularios
      .where('usuario')
      .equalsIgnoreCase(usuario)
      .first();
    return user?.contrasena === contrasena;
  }

  async validarUsuarioExistente(usuario: string): Promise<boolean> {
    const count = await this.formularios
      .where('usuario')
      .equalsIgnoreCase(usuario)
      .count();
    return count > 0;
  }

  async guardarFormulario(data: IFormulario): Promise<number> {
    return await this.formularios.add(data);
  }

  // ================= MÉTODOS DE CONSULTA =================
  async obtenerUsuarioPorId(id: number): Promise<IFormulario | undefined> {
    return await this.formularios.get(id);
  }

  async obtenerTodos(): Promise<IFormulario[]> {
    return await this.formularios.toArray();
  }

  async buscarPorUsuario(usuario: string): Promise<IFormulario[]> {
    return await this.formularios
      .where('usuario')
      .equalsIgnoreCase(usuario)
      .toArray();
  }

  // ================= MÉTODOS DE BORRADO =================
  async borrarUsuario(id: number): Promise<void> {
    await this.formularios.delete(id);
  }

  async borrarTodosLosRegistros(): Promise<void> {
    await this.formularios.clear();
    // Nuevo: Borrar también el progreso del localStorage
    localStorage.removeItem('progreso');
  }

  async borrarProgreso(): Promise<void> {
    localStorage.removeItem('progreso');
  }

  // ================= MÉTODOS DE DEPURACIÓN =================
  private mostrarComandosConsola(): void {
    console.log('%cComandos disponibles para depuración:', 'color: #2196F3; font-weight: bold');
    console.log('%cdb.obtenerPorId(id)', 'color: #4CAF50', '- Buscar usuario por ID');
    console.log('%cdb.obtenerTodos()', 'color: #4CAF50', '- Mostrar todos los registros');
    console.log('%cdb.buscarPorUsuario("usuario")', 'color: #4CAF50', '- Buscar por nombre de usuario');
    console.log('%cdb.borrarUsuario(id)', 'color: #FF5722', '- Borrar usuario por ID (pide confirmación)');
    console.log('%cdb.borrarTodo()', 'color: #F44336', '- Borrar TODOS los registros (pide confirmación)');
    console.log('%cdb.borrarProgreso()', 'color: #FF5722', '- Borrar todos los datos de progreso');
  }

  private exponerMetodosDepuracion(): void {
    if (typeof window !== 'undefined') {
      (window as any).db = {
        // Métodos de consulta
        obtenerPorId: (id: number) => this.obtenerUsuarioPorId(id),
        obtenerTodos: () => this.obtenerTodos(),
        buscarPorUsuario: (usuario: string) => this.buscarPorUsuario(usuario),
          
        // Métodos de borrado con confirmación
        borrarUsuario: (id: number) => {
          if (confirm(`¿Estás seguro de borrar el usuario con ID ${id}?`)) {
            return this.borrarUsuario(id)
              .then(() => console.log(`Usuario con ID ${id} borrado correctamente`))
              .catch(err => console.error('Error al borrar usuario:', err));
          }
          return Promise.reject('Operación cancelada por el usuario');
        },
        
        borrarTodo: () => {
          if (confirm('¿ESTÁS ABSOLUTAMENTE SEGURO DE BORRAR TODOS LOS REGISTROS?\n\nEsta acción no se puede deshacer.')) {
            return this.borrarTodosLosRegistros()
              .then(() => console.log('Todos los registros han sido borrados'))
              .catch(err => console.error('Error al borrar registros:', err));
          }
          return Promise.reject('Operación cancelada por el usuario');
        },
        
        borrarProgreso: () => {
          if (confirm('¿Borrar todos los datos de progreso?')) {
            return this.borrarProgreso()
              .then(() => console.log('Progreso borrado correctamente'))
              .catch(err => console.error('Error al borrar progreso:', err));
          }
          return Promise.reject('Operación cancelada por el usuario');
        }
      };
    }
  }
}

export interface IFormulario {
  id?: number;
  usuario: string;
  contrasena: string;
  matricula: string;
  conocimientosProgramacion: string;
}