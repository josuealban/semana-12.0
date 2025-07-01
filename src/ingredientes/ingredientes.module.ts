import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingrediente } from './entities/ingrediente.entity';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente])],  // <-- ¡AQUÍ!
  controllers: [IngredientesController],
  providers: [IngredientesService],
  exports: [TypeOrmModule], // (opcional, si lo necesitas fuera del módulo)
})
export class IngredientesModule {}